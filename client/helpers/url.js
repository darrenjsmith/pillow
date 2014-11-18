/**
 * Returns a string in a URL friendly format.
 * @param string str The input string.
 * @return string The URL friendly string.
 */
function getUrlFriendlyString(str)
{
   // convert spaces to '-'
   str = str.replace(/ /g, "-");
   // Make lowercase
   str = str.toLowerCase();
   // Remove characters that are not alphanumeric or a '-'
   str = str.replace(/[^a-z0-9-]/g, "");
   // Combine multiple dashes (i.e., '---') into one dash '-'.
   str = str.replace(/[-]+/g, "-");
   return str;
}