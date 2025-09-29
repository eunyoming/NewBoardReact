const BASE_URL = "http://10.5.5.7/api";

const apiRoutes = {
    auth: {
        /**
         * 로그인 API<br>
         * POST /api/auth<br>
         * body: { userId, passwd }<br>
         * response: {MemberDTO}
         */
        login: {url: `${BASE_URL}/auth/login`, method: "POST"},

        /**
         * 로그아웃 API<br>
         * GET /api/auth
         */
        logout: {url: `${BASE_URL}/auth/logout`, method: "GET"},

        /**
         * 아이디 중복 확인 API<br>
         * GET /api/member<br>
         * param: {memberId}<br>
         * response: true(중복)/false(중복아님)
         */
        checkMemberId: (memberId) => ({
            url: `${BASE_URL}/member/checkDuplicateId?id=${memberId}`,
            method: "GET"
        }),
    },
    member: {
        /**
         * 회원가입 API<br>
         * POST /api/user<br>
         * body: {MemberDTO}
         */
        register: {url: `${BASE_URL}/member`, method: "POST"},

        /**
         * 회원탈퇴 API<br>
         * PATCH /api/users<br>
         * body: {MemberDTO}
         */
        delete: {url: `${BASE_URL}/member`, method: "DELETE"},

        /**
         * 현재 사용자 정보 조회 API<br>
         * GET /api/member/me<br>
         * response: {MemberDTO}
         */
        me: {url: `${BASE_URL}/member/me`, method: "GET"},

        /**
         * 사용자 정보 수정 API<br>
         * PATCH /api/member/{memberId}<br>
         * body: {MemberDTO}
         */
        patch:(memberId) => ({
            url: `${BASE_URL}/member/${memberId}`,
            method: "PATCH"
        }),

        /**
         * 비밀번호 변경 API<br>
         * PATCH /api/member/password<br>
         * body: {MemberDTO}<br>
         * response: {errorMessage: message}
         */
        passwordChange: (memberId) => ({
            url: `${BASE_URL}/member/password/${memberId}`,
            method: "PATCH"
        }),
    },
};

export default apiRoutes;