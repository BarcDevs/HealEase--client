export const Rights = ({  }) => (
    <div className={'mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row'}>
        <p className={'text-sm text-muted-foreground'}>
            &copy; {new Date()
            .getFullYear()} HealEase. All rights reserved.
        </p>
        <div className={'flex items-center gap-6'}>
                <span className={'text-sm text-muted-foreground'}>
                  Made with care for your recovery
                </span>
        </div>
    </div>
)