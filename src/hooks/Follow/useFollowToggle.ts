import { useState } from 'react';
import { followToggle } from '@/apis/follow/follow.api';

const useFollowToggle = () => {
    const [isFollowing, setIsFollowing] = useState<boolean>(false);

};

export default useFollowToggle;