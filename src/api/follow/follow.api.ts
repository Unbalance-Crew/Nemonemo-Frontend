import { motreeAxios } from "@/libs/axios/axios";
import { FollowUnFollowResponse, getFollowListResponse, FollowCountResponse} from "@/types/follow/follow";

const SERVER_URL = process.env.VITE_SERVER_URL || "http://localhost:5173";