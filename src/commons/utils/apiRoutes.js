const apiRoutes = {
    auth: {
        /**
         * 로그인 API<br>
         * POST /api/auth<br>
         * body: { userId, passwd }<br>
         * response: {MemberDTO}
         */
        login: {url: `/auth/login`, method: "POST"},

        /**
         * 로그아웃 API<br>
         * GET /api/auth
         */
        logout: {url: `/auth/logout`, method: "GET"},

        /**
         * 아이디 중복 확인 API<br>
         * GET /api/member<br>
         * param: {memberId}<br>
         * response: true(중복)/false(중복아님)
         */
        checkMemberId: (memberId) => ({
            url: `/member/checkDuplicateId?id=${memberId}`,
            method: "GET"
        }),
    },
    member: {
        /**
         * 회원가입 API<br>
         * POST /api/user<br>
         * body: {MemberDTO}
         */
        register: {url: `/member`, method: "POST"},

        /**
         * 회원탈퇴 API<br>
         * PATCH /api/users<br>
         * body: {MemberDTO}
         */
        delete: {url: `/member`, method: "DELETE"},

        /**
         * 현재 사용자 정보 조회 API<br>
         * GET /api/member/me<br>
         * response: {MemberDTO}
         */
        me: {url: `/member/me`, method: "GET"},

        /**
         * 사용자 정보 수정 API<br>
         * PUT /api/member/{memberId}<br>
         * body: {MemberDTO}
         */
        put:(memberId) => ({
            url: `/member/${memberId}`,
            method: "PUT"
        }),

        /**
         * 비밀번호 변경 API<br>
         * PUT /api/member/password<br>
         * body: {MemberDTO}<br>
         * response: {errorMessage: message}
         */
        passwordChange: (memberId) => ({
            url: `/member/password/${memberId}`,
            method: "PUT"
        }),
    },
};

export default apiRoutes;