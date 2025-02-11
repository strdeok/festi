export default async function DownloadImageFile(imageUrl) {
    console.log(imageUrl)
    const response = await fetch(imageUrl);
    console.log(response)
    const blob = await response.blob();
    console.log(blob)

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "downloaded-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
