export const BackgroundGradient = ({}) => (
    <>
        <div className={'absolute inset-0 -z-10 bg-linear-to-b from-primary/5 via-transparent to-transparent'}/>
        <div className={'absolute right-0 top-0 -z-10 size-150 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-3xl'}/>
        <div className={'absolute bottom-0 left-0 -z-10 size-100 translate-y-1/2 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl'}/>
    </>
)