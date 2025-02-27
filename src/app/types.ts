export type MuxyEvents = {
    count: number,
    next: MuxyEvent,
    previous: MuxyEvent,
    results: Array<MuxyEvent>
}

export type MuxyEvent = {
    url: string,
    name: string,
    slug: string,
    description: string,
    starts_at: Date,
    ends_at: Date,
    active: boolean,
    preparation_time: number,
    rtmp_url: string,
    public_rtmp_url: string,
    contact_email: string
}

export type MuxyStream = {
    url: string,
    publisher_name:	string,
    publisher_email: string,
    description: string,
    location: string,
    timezone: string,
    starts_at: Date,
    ends_at: Date,
    key: string,
    live_at: Date,
    event: string,
    recordings:	string
}

export type MuxyStreams = {
    count: number,
    next: string,
    previous: string,
    results: Array<MuxyStream>
}
