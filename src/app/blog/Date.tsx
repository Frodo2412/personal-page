import {format, parseISO} from 'date-fns';

export default function Date({dateString}: { dateString: string }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString} className={"text-gray-500"}>{format(date, 'LLLL d, yyyy')}</time>;
}