import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  bytes: number;
}

export class CloudinaryService {
  /**
   * Upload image to Cloudinary
   * @param file - File buffer or base64 string
   * @param folder - Folder name in Cloudinary (optional)
   * @param transformation - Image transformation options (optional)
   * @returns Promise<CloudinaryUploadResult>
   */
  static async uploadImage(
    file: Buffer | string,
    folder?: string,
    transformation?: any
  ): Promise<CloudinaryUploadResult> {
    try {
      const uploadOptions: any = {
        resource_type: 'image',
        quality: 'auto',
        fetch_format: 'auto',
      };

      if (folder) {
        uploadOptions.folder = folder;
      }

      if (transformation) {
        uploadOptions.transformation = transformation;
      }

      const fileString =
        typeof file === 'string'
          ? file
          : `data:image/jpeg;base64,${file.toString('base64')}`;

      const result = await cloudinary.uploader.upload(
        fileString,
        uploadOptions
      );

      return {
        public_id: result.public_id,
        secure_url: result.secure_url,
        width: result.width,
        height: result.height,
        format: result.format,
        resource_type: result.resource_type,
        created_at: result.created_at,
        bytes: result.bytes,
      };
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw new Error('Failed to upload image to Cloudinary');
    }
  }

  /**
   * Delete image from Cloudinary
   * @param publicId - Public ID of the image to delete
   * @returns Promise<boolean>
   */
  static async deleteImage(publicId: string): Promise<boolean> {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      return result.result === 'ok';
    } catch (error) {
      console.error('Cloudinary delete error:', error);
      return false;
    }
  }

  /**
   * Get optimized image URL with transformations
   * @param publicId - Public ID of the image
   * @param transformations - Transformation options
   * @returns string - Optimized image URL
   */
  static getOptimizedUrl(publicId: string, transformations?: any): string {
    return cloudinary.url(publicId, {
      quality: 'auto',
      fetch_format: 'auto',
      ...transformations,
    });
  }

  /**
   * Upload multiple images
   * @param files - Array of file buffers
   * @param folder - Folder name in Cloudinary
   * @returns Promise<CloudinaryUploadResult[]>
   */
  static async uploadMultipleImages(
    files: Buffer[],
    folder?: string
  ): Promise<CloudinaryUploadResult[]> {
    try {
      const uploadPromises = files.map(file => 
        this.uploadImage(file, folder)
      );
      return await Promise.all(uploadPromises);
    } catch (error) {
      console.error('Multiple upload error:', error);
      throw new Error('Failed to upload multiple images');
    }
  }
}

export default cloudinary;