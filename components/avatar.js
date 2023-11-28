import { Image } from "react-datocms";

export default function Avatar({ name, picture, authorJobTitle }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 mr-4">
        <Image
          alt={name}
          data={picture.responsiveImage}
          className="rounded-full"
        />
      </div>
      <div><h5 className="text-xl font-bold">{name}</h5><p>{authorJobTitle}</p></div>
    </div>
  );
}
