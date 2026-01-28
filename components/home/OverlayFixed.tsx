export default function OverlayFixed() {
    return (
        <div className="relative h-0">
        <div
            className="
        sticky top-0
        h-screen
        pointer-events-none
        bg-white/75
        z-[-10]
      "
        />
        </div>
    );
}
