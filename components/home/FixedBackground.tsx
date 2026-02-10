export default function FixedBackground() {
    return (
        <>
            {/* BACKGROUND IMAGE */}
            <div
                className="fixed inset-0 -z-20 bg-cover bg-center"
                style={{ backgroundImage: "url('/bitone-rzeszow.png')" }}
            />
        </>
    );
}
