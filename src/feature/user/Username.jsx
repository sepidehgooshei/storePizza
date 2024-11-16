import { useSelector } from 'react-redux';

export default function Username() {
    const username = useSelector((state) => state.user?.username);

    if (!username) return null;

    return (
        <span className="text-secondary fw-normal mx-1 px-5">{username}</span>
    );
}

