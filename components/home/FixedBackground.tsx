export default function FixedBackground() {
    return (
        <>
            {/* BACKGROUND IMAGE */}
            <div
                className="fixed inset-0 -z-20 bg-cover bg-center scale-[1.03]"
                style={{ backgroundImage: "url('/bitone-rzeszow.png')" }}
            />


        {/*    /!* OVERLAY *!/*/}
        {/*    <div*/}
        {/*        className="*/}
        {/*  fixed inset-0 -z-10*/}
        {/*  bg-white/75*/}
        {/*"*/}
        {/*    />*/}
        </>
    );
}
