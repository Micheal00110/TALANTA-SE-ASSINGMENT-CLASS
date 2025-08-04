// Basic tracker
function trackPackage(trackingID, statusCode) {
  try {
    // Validate trackingID
    if (typeof trackingID !== "string" || !trackingID.trim()) {
      throw new Error("Invalid tracking ID");
    }

    // Validate statusCode
    const validStatuses = ["PENDING", "IN_TRANSIT", "DELIVERED", "RETURNED"];
    if (!validStatuses.includes(statusCode)) {
      throw new Error("Unknown status code");
    }

    // switch to produce message
    let message;
    switch (statusCode) {
      case "PENDING":
        message = "Package is still at the warehouse.";
        break;
      case "IN_TRANSIT":
        message = "Package is on the way.";
        break;
      case "DELIVERED":
        message = "Package has been delivered.";
        break;
      case "RETURNED":
        message = "Package was returned to sender.";
        break;
    }
    console.log(message);
    return message;
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("Tracking check complete.");
  }
}

// ---- Demo ----
trackPackage("PKG12345", "DELIVERED");
// Package has been delivered.
// Tracking check complete.

trackPackage("", "IN_TRANSIT");
// Error: Invalid tracking ID
// Tracking check complete.

trackPackage("PKG77777", "LOST");
// Error: Unknown status code
// Tracking check complete.

// ----------------------------------------------------------------
// Bonus: Package class
class Package {
  constructor(trackingID, statusCode) {
    this.trackingID = trackingID;
    this.statusCode = statusCode;
  }

  getStatusMessage() {
    return trackPackage(this.trackingID, this.statusCode);
  }
}

// Example usage of the class
const pkg = new Package("PKG98765", "PENDING");
pkg.getStatusMessage();
// Package is still at the warehouse.
// Tracking check complete.