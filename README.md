
# Minty's Toast Message (mintys-toast-message)

This repository contains a lightweight, customisable toast notification system built with JavaScript and CSS. It provides an easy way to integrate informative and interactive notifications into your web projects without needing third-party plugins.

## Features

- Lightweight & Customisable: No dependencies, easily styled and configured.
- Supports multiple types, including success, warning, and error notifications.
- Auto-dismiss & Clickable: Toasts disappear after a set time or can be dismissed early by clicking.

## Getting Started

### Prerequisites

Please make sure your project includes jQuery, as it is required for the toast notifications to work.

### Installation

- Include the CSS file:

  Add the following line in your HTML's <head> section to include the necessary styles for the toast notifications.
  ```html
  <link rel="stylesheet" href="path/to/toast-style.css">
  ```

- Include the JavaScript:

  Ensure jQuery is included, then include the toast notification JavaScript file.
  ```html
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="path/to/toast-notification.js"></script>
  ```

- Font Awesome Icons:

  To utilize icons in the toast messages, include Font Awesome in your HTML <head>:
  ```html  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  ```
  
- File Locations (relative):

  To accurately reference files within a relative path structure in your project, such as linking to CSS or JavaScript files located in a directory relative to your current file, you'll need to adjust the path in your HTML to ensure it correctly points to these resources. 
  
  It would be a good idea to put the files into a folder called "toast", which is one level up from your current location, so the path should be set as "../toast".  This means the links in your HTML file should be similar to the following example:
  ```html
  // css file include:
  <link rel="stylesheet" href="../toast/toast-style.css">
  
  // js file include:
  <script src="../toast/toast-notification.js"></script>
  ```
  Or, you could put the full URL into the src field, such as 'https://mikeminton.xyz/toast/toast-notification.js', where the 'mikeminton.xyz' is your domain name, example:
  ```html
  // css file include:
  <link rel="stylesheet" href="https://mikeminton.xyz/toast/toast-style.css">
  
  // js file include:
  <script src="https://mikeminton.xyz/toast/toast-notification.js"></script>
  ```

### Usage

To use the toast notification system, call the toastMessage function wherever you need to display a notification. Here are some examples:
  ```javascript  
  // Display a success message
  toastMessage('Operation successful!', 'success');
  
  // Display a warning message
  toastMessage('Please check your entries.', 'warning');
  
  // Display an error message
  toastMessage('Failed to load data.', 'error');
  
  ```

### Function Parameters

- text (string): The message you want to display.
- type (string): The type of notification ('success', 'warning', or 'error'). The default is 'warning'.



## Example

You will also find an HTML file named example.html. This file includes a button that, when clicked, will display a toast notification. The toast functionality is assumed to be correctly defined in your toast-notification.js file.
The CSS and JavaScript files are expected to be located within a folder called "toast" in your working folder.

## Customisation
Modify the CSS file to change the appearance of the toast messages, such as background colour, text colour, and animation duration.

## Contributing
Contributions are welcome! For major changes, please open an issue first to discuss what you want to change.

## License
Distributed under the Unlicence License.
