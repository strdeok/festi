

export default function PolaroidFrame({ source }) {
    return (
        <div
            className="w-[19rem] h-[23.75rem] bg-white relative"
            style={{
                filter:
                "drop-shadow(4.080536842346191px 4.080536842346191px 16.322147369384766px rgba(150,175,207,0.25))",
            }}
        >
                <img id = "Img"
                    src={source}
                    className= {`w-[15.875rem] h-[19.75rem] pt-[1.5rem] ml-[1.5625rem]`}
                />
        </div>
    );
}