export default function FixedOverlay() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div
                className="
          sticky top-0
          h-screen
          bg-white/75
          z-[-10]
        "
            />
        </div>
    );
}
