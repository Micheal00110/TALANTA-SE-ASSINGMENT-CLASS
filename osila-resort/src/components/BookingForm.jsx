import { useForm } from 'react-hook-form';
import { useState } from 'react';

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Stay</h2>
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Thank you for your booking request! We'll get back to you shortly to confirm your reservation.
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
              Check-in Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="checkIn"
              {...register('checkIn', { required: 'Check-in date is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.checkIn && (
              <p className="mt-1 text-sm text-red-600">{errors.checkIn.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
              Check-out Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="checkOut"
              {...register('checkOut', { required: 'Check-out date is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.checkOut && (
              <p className="mt-1 text-sm text-red-600">{errors.checkOut.message}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
              Adults <span className="text-red-500">*</span>
            </label>
            <select
              id="adults"
              {...register('adults', { required: 'Number of adults is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              defaultValue="1"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
              Children
            </label>
            <select
              id="children"
              {...register('children')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              defaultValue="0"
            >
              {[0, 1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
            Room Type <span className="text-red-500">*</span>
          </label>
          <select
            id="roomType"
            {...register('roomType', { required: 'Room type is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">Select a room type</option>
            <option value="deluxe">Deluxe Room - $199/night</option>
            <option value="executive">Executive Suite - $299/night</option>
            <option value="family">Family Suite - $349/night</option>
            <option value="presidential">Presidential Suite - $599/night</option>
          </select>
          {errors.roomType && (
            <p className="mt-1 text-sm text-red-600">{errors.roomType.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
            Special Requests
          </label>
          <textarea
            id="specialRequests"
            {...register('specialRequests')}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Any special requests or requirements?"
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Processing...' : 'Book Now'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
