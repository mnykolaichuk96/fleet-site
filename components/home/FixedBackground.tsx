export default function FixedBackground() {
    return (
        <>
            {/* BACKGROUND IMAGE */}
            <div
                className="fixed top-0 left-0 w-full h-[100svh] -z-20 bg-cover bg-center"
                style={{ backgroundImage: "url('/bitone-rzeszow.jpg')" }}
            />
        </>
    );

}
