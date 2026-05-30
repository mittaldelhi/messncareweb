from PIL import Image

def make_transparent(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        # Tolerance for "white"
        threshold = 240
        for item in data:
            # item is (R, G, B, A)
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                # Change white (also near white) to transparent
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    input_img = r"e:\Makencarewebsite\public\images\Mess N care.png"
    make_transparent(input_img, r"e:\Makencarewebsite\public\images\logo-wordmark.png")
    make_transparent(input_img, r"e:\Makencarewebsite\public\images\logo.png")
