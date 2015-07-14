# Gumboot

A jQuery plugin that extracts key:value pairs from an element and attaches it to said element as a javascript object.

## $(selector).gumboot(settings);

**Description** Extract key:value pairs from an element and attach it to that element as an object.

**selector** (default: ".data")
Type: String
A CSS selector for elements that contain key:value pairs.

**separator** (default: ":")
Type: String
One or more characters that separate the key:value pairs.

**callback** (default: null)
Type: Function
A function that executes on an element once the plugin attaches data to it.
function( settings, index, length ){}
   **settings**
   Type: Object
   An object that contains the final state of settings for this instance of the plugin

   **index**
   Type: Integer
   A 0-based number identifying which element in the collection your function is handling.

   **length**
   Type: Integer
   The number of elements in the collection.
