import Nav from "../../../commons/components/Nav";
import useMemberStore from "../../../commons/stores/memberStore";

export default function Home() {
    const memberInfo = useMemberStore((state) => state.member);

    return (
        <div>
            <Nav/>
            {memberInfo.id}님 어서오세요!
        </div>
    );
}