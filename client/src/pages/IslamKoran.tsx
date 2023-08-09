import ResponsiveIframe from "@/components/ResponsiveIframe";

export default function IslamKoran() {
  return (
    <ResponsiveIframe>
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/9EuYGA0eApU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </ResponsiveIframe>
  );
}
