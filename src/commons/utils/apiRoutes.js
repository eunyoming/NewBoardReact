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
             * POST /api/member<br>
             * body: {MemberDTO}
             */
            register: {url: `/member`, method: "POST"},

            /**
             * 회원탈퇴 API<br>
             * PATCH /api/member<br>
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
             * PUT /api/member<br>
             * body: {MemberDTO}
             */
            put: {url: `/member`, method: "PUT"},

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

        board: {
            /**
             * 게시글 작성 API<br>
             * POST /api/board<br>
             * body: {BoardDTO}
             */
            insert: {url: `/board`, method: "POST"},

            /**
             * 게시글 삭제 API<br>
             * PATCH /api/board<br>
             * body: {BoardDTO}
             */
            delete: (boardId) => ({
                url: `/board/${boardId}`,
                method: "DELETE"
            }),

            /**
             * 게시글 목록 API<br>
             * GET /api/board<br>
             * response: {BoardDTO}
             */
            list: {url: `/board`, method: "GET"},

            /**
             * 게시글 Item API<br>
             * GET /api/board<br>
             * response: {BoardDTO}
             */
            item: (boardId) => ({
                url: `/board/${boardId}`,
                method: "GET"
            }),

            /**
             * 게시글 수정 API<br>
             * PUT /api/board/{boardId}<br>
             * body: {BoardDTO}
             */
            put: {url: `/board`, method: "PUT"},

            /**
             * 게시글 검색 API<br>
             * GET /api/board<br>
             * response: {BoardDTO}
             */
            searchList: (searchQuery) => ({
                url: `/board?title=${searchQuery}`,
                method: "GET"
            }),
        },
        reply: {
            /**
             * 댓글 등록 API<br>
             * POST /api/reply<br>
             * body: {ReplyDTO}
             */
            insert: {
                url: `/reply`,
                method: "POST"
            },

            /**
             * 댓글 수정 API<br>
             * POST /api/reply<br>
             * body: {ReplyDTO}
             */
            put: {
                url: `/reply`,
                method: "PUT"
            },

            /**
             * 댓글 삭제 API<br>
             * POST /api/reply/{id}<br>
             */
            delete: (targetId) => ({
                url: `/reply/${targetId}`,
                method: "DELETE"
            }),
        },
    }
;

export default apiRoutes;