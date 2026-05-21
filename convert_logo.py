import os
from PIL import Image, ImageEnhance

def convert_to_transparent():
    input_path = os.path.join("public", "logo_premium.webp")
    if not os.path.exists(input_path):
        input_path = os.path.join("public", "logo_premium.jpeg")
        
    output_path = os.path.join("public", "logo_premium.png")
    
    if not os.path.exists(input_path):
        print(f"Error: Neither logo_premium.webp nor logo_premium.jpeg was found.")
        return
        
    print(f"Loading input image: {input_path}")
    img = Image.open(input_path).convert("RGBA")
    
    # Crop the image to its actual bounding box first to remove the massive empty margins
    bbox = img.getbbox()
    if bbox:
        # Add a small padding (e.g. 10px) to prevent any edge clipping
        p = 15
        padded_bbox = (
            max(0, bbox[0] - p),
            max(0, bbox[1] - p),
            min(img.width, bbox[2] + p),
            min(img.height, bbox[3] + p)
        )
        img = img.crop(padded_bbox)
        print(f"Successfully cropped empty margins. Original bbox: {bbox}, Padded bbox: {padded_bbox}")
    else:
        print("Warning: Bounding box could not be determined. Image might be fully transparent.")

    # Enhance color saturation to make the emblem and text bold and attractive
    # A value of 1.4 boosts color saturation by 40% for rich, vibrant, high-fidelity colors
    enhancer = ImageEnhance.Color(img)
    img = enhancer.enhance(1.4)
    print("Boosted color saturation by 40% for rich and attractive branding colors.")
    
    # Save the beautifully cropped, high-saturation transparent PNG
    img.save(output_path, "PNG")
    print(f"Successfully saved clean transparent logo to {output_path}")

if __name__ == "__main__":
    convert_to_transparent()
