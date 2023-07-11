function generateTexture() {
    var format_version_input = "format_version_input";
    var texture_name_input = "texture_name_input";
    var suffix_mer_input = "suffix_mer_input";
    var suffix_input = "suffix_input";
  
    var format_version = document.getElementById(format_version_input).value;
    var texture_name = document.getElementById(texture_name_input).value;
    var suffix_mer = document.getElementById(suffix_mer_input).value;
    var suffix = document.getElementById(suffix_input).value;
  
    var texture = `{
        "format_version": "${format_version}",
        "minecraft:texture_set": {
            "color": "${texture_name}",
            "metalness_emissive_roughness": "${texture_name}_${suffix_mer}",
            "heightmap": "${texture_name}_${suffix}"
        }
    }`;
  
    document.getElementById("textureTextArea").value = texture;
  }
  
  function clearTextArea() {
    document.getElementById("textureTextArea").value = "";
  }
  
  function downloadTexture() {
    var texture_name = document.getElementById("texture_name_input").value;
    var texture = document.getElementById("textureTextArea").value; 
  
    var filename = `${texture_name}.texture_set.json`; 
  
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(texture));
    element.setAttribute("download", filename);
  
    element.style.display = "none";
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element); 
  }
  