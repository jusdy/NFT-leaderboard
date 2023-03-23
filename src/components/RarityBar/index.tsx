const RarityBar = () => {
    return (
        <div className="relative flex flex-col gap-y-[6px]">
            <label className="md:text-xl sm:text-md text-xs tracking-widest text-center">
                Rarity
            </label>
            <img alt="" className="md:w-[100px] w-[55px]" src="assets/icons/rarity.svg" />
            <label className="absolute md:top-[50px] md:left-[38px] top-[30px] left-[21px] font-bold md:text-4xl text-xl">
                1
            </label>
        </div>
    )
}

export default RarityBar