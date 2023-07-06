export interface Sticker {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
    original: {
      url: string;
    };
  };
}
