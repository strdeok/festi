

export default function PolaroidFrame({ source }) {
    return (
        <div
            className="w-[304px] h-[380px] bg-white relative"
            style={{
                filter:
                "drop-shadow(4.080536842346191px 4.080536842346191px 16.322147369384766px rgba(150,175,207,0.25))",
            }}
        >
                <img
                    src={source}
                    className= {`w-[254px] h-[316px] pt-[24px] ml-[25px]`}
                />
        </div>
    );
}