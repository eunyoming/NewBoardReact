import Nav from "../../../commons/components/Nav";
import useMemberStore from "../../../commons/stores/memberStore";

export default function Home() {
    const memberInfo = useMemberStore((state) => state.member);

    return (
        <div>
            {memberInfo.id}님 어서오세요!
        </div>
    );
}