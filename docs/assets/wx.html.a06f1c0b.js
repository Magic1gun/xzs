import{_ as e,o as i,c as n,e as u}from"./app.123c31d4.js";const d={},s=u(`<h1 id="_4-2-小程序" tabindex="-1"><a class="header-anchor" href="#_4-2-小程序" aria-hidden="true">#</a> 4.2 小程序</h1><h3 id="_4-2-1-登录" tabindex="-1"><a class="header-anchor" href="#_4-2-1-登录" aria-hidden="true">#</a> 4.2.1 登录</h3><ul><li>接口地址：/api/wx/student/auth/bind</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     userName: student  //用户名
     password: 123456   //密码
     code: 023BNuFa1CQ14B07KVHa16RHM94BNuF0   //授权码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: &quot;950efd96-ecd1-4482-9204-c54cd3325a8a&quot;  //登录Token
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-2-注册" tabindex="-1"><a class="header-anchor" href="#_4-2-2-注册" aria-hidden="true">#</a> 4.2.2 注册</h3><ul><li>接口地址：/api/wx/student/user/register</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    userName: student2  //用户名
    password: 123456 //密码
    userLevel: 1   //年级
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-3-检查绑定" tabindex="-1"><a class="header-anchor" href="#_4-2-3-检查绑定" aria-hidden="true">#</a> 4.2.3 检查绑定</h3><ul><li>接口地址：/api/wx/student/user/register</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    code: 063MMx000eoAnM15Tj400hq8l64MMx0Z  //令牌
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: &quot;2fa8cbb7-6be9-4e54-bc68-1265348cf703&quot;  //登录令牌
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-3-解绑退出" tabindex="-1"><a class="header-anchor" href="#_4-2-3-解绑退出" aria-hidden="true">#</a> 4.2.3 解绑退出</h3><ul><li>接口地址：/api/wx/student/auth/unBind</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //令牌
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-3-主页试卷列表" tabindex="-1"><a class="header-anchor" href="#_4-2-3-主页试卷列表" aria-hidden="true">#</a> 4.2.3 主页试卷列表</h3><ul><li>接口地址：/api/wx/student/dashboard/index</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //令牌
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;fixedPaper&quot;: [  //固定试卷
            {
                &quot;id&quot;: 34,  //试卷id
                &quot;name&quot;: &quot;aaa&quot;,  //试卷名称
                &quot;limitStartTime&quot;: null,
                &quot;limitEndTime&quot;: null
            }
        ],
        &quot;timeLimitPaper&quot;: [  //时段试卷
            {
                &quot;id&quot;: 34,  //试卷id
                &quot;name&quot;: &quot;202008705&quot;,  //试卷名称
                &quot;limitStartTime&quot;: 1600704000000,
                &quot;limitEndTime&quot;: 1664985600000,
                &quot;startTime&quot;: &quot;2020-09-22 00:00:00&quot;,  //考试开始时间
                &quot;endTime&quot;: &quot;2022-10-06 00:00:00&quot;  //考试结束时间
            }
        ],
        &quot;classPaper&quot;: [  //班级试卷
            {
                &quot;paperId&quot;: 21,  //试卷id
                &quot;paperName&quot;: &quot;20200908&quot;,  //试卷名称
                &quot;className&quot;: &quot;1班&quot;  //班级
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-4-任务中心" tabindex="-1"><a class="header-anchor" href="#_4-2-4-任务中心" aria-hidden="true">#</a> 4.2.4 任务中心</h3><ul><li>接口地址：/api/wx/student/dashboard/index</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //令牌
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: [
        {
            &quot;id&quot;: 34,
            &quot;title&quot;: &quot;基础任务&quot;, //任务标题
            &quot;paperItems&quot;: [
                {
                    &quot;examPaperId&quot;: 19,  //试卷id
                    &quot;examPaperName&quot;: &quot;基础任务一&quot;,  //试卷名称
                    &quot;examPaperAnswerId&quot;: 9,  //答卷id
                    &quot;status&quot;: 2 //答卷状态
                }
            ]
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-4-试卷列表" tabindex="-1"><a class="header-anchor" href="#_4-2-4-试卷列表" aria-hidden="true">#</a> 4.2.4 试卷列表</h3><ul><li>接口地址：/api/wx/student/exam/paper/pageList</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    paperType: 1,  //试卷类型
    pageIndex: 1,  //页码
    pageSize: 20  //每页数量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 9,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 34,
                &quot;name&quot;: &quot;固定试卷&quot;, //试卷名称
                &quot;questionCount&quot;: 1, //题目数量
                &quot;score&quot;: 50, //分数
                &quot;createTime&quot;: &quot;2021-09-10 16:06:45&quot;, //创建时间
                &quot;createUser&quot;: 2, //创建人
                &quot;subjectId&quot;: 4, //学科
                &quot;subjectName&quot;: &quot;语文&quot;, //学科名称
                &quot;paperType&quot;: 1, //试卷类型
                &quot;frameTextContentId&quot;: 294,  试卷内容
                &quot;startTime&quot;: &quot;&quot;,  //考试开始时间
                &quot;endTime&quot;: &quot;&quot;, //考试结束时间
                &quot;paperTypeStr&quot;: &quot;固定试卷&quot;, //试卷类型
                &quot;scoreStr&quot;: &quot;5&quot;, //分数
                &quot;suggestTimeStr&quot;: &quot;20分钟&quot; //考试时长
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-5-试卷查询" tabindex="-1"><a class="header-anchor" href="#_4-2-5-试卷查询" aria-hidden="true">#</a> 4.2.5 试卷查询</h3><ul><li>接口地址：/api/wx/student/exam/paper/select/24</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 34, //试卷id
        &quot;level&quot;: 1,  //年级
        &quot;subjectId&quot;: 4,  //学科
        &quot;paperType&quot;: 1,  //试卷类型
        &quot;name&quot;: &quot;20200912卷&quot;,  //试卷名称
        &quot;suggestTime&quot;: 30,  //考试时长
        &quot;limitDateTime&quot;: null,  
        &quot;titleItems&quot;: [ //标题
            {
                &quot;name&quot;: &quot;一、解答题&quot;,  //标题名称
                &quot;questionItems&quot;: [  //题目列表
                    {
                        &quot;id&quot;: 34,  //题目id
                        &quot;questionType&quot;: 1, //题目类型
                        &quot;subjectId&quot;: 4, //学科
                        &quot;title&quot;: &quot;中华四大名著都有哪些，下列正确的是&quot;,  //题干
                        &quot;gradeLevel&quot;: 1, //年级
                        &quot;items&quot;: [  //选项
                            {
                                &quot;prefix&quot;: &quot;A&quot;,  //选项标识
                                &quot;content&quot;: &quot;红楼梦&quot;,  //选项内容
                                &quot;score&quot;: null //分数
                            }
                        ],
                        &quot;analyze&quot;: &quot;题目比较简单，自行分析&quot;, //解析
                        &quot;correctArray&quot;: null,  //标答
                        &quot;correct&quot;: &quot;A&quot;,  //标答
                        &quot;score&quot;: &quot;2.5&quot;, //得分
                        &quot;difficult&quot;: 3, //难度
                        &quot;itemOrder&quot;: 1, //题目排序
                        &quot;knowledgeIdList&quot;: [ //题目知识点
                            8,
                            9
                        ]
                    }
                ]
            }
        ],
        &quot;score&quot;: &quot;20&quot;, //试卷得分
        &quot;classes&quot;: null //班级
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-6-答卷列表" tabindex="-1"><a class="header-anchor" href="#_4-2-6-答卷列表" aria-hidden="true">#</a> 4.2.6 答卷列表</h3><ul><li>接口地址：/api/wx/student/exam/paper/pageList</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    pageIndex: 1,  //页码
    pageSize: 20  //每页数量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 248,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 262,
                &quot;createTime&quot;: &quot;2021-09-15 14:42:22&quot;,  //提交时间
                &quot;userScore&quot;: &quot;0&quot;,  //得分
                &quot;subjectName&quot;: &quot;语文&quot;, //学科
                &quot;subjectId&quot;: 4, //学科
                &quot;questionCount&quot;: 2, //题目数量
                &quot;questionCorrect&quot;: 1, //正确题数
                &quot;paperScore&quot;: &quot;1&quot;, //试卷总分
                &quot;doTime&quot;: &quot;2秒&quot;, //耗时
                &quot;paperType&quot;: 7, //试卷类型
                &quot;paperTypeStr&quot;: &quot;随机试卷&quot;, //试卷类型
                &quot;systemScore&quot;: &quot;0&quot;, //自动批改得分
                &quot;status&quot;: 2, //状态
                &quot;paperName&quot;: &quot;智能训练试卷 - 51&quot;, //试卷名称
                &quot;userName&quot;: null
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-7-试卷提交" tabindex="-1"><a class="header-anchor" href="#_4-2-7-试卷提交" aria-hidden="true">#</a> 4.2.7 试卷提交</h3><ul><li>接口地址：/api/wx/student/exampaper/answer/answerSubmit</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &quot;1_42_1&quot;: &quot;A&quot; //答题信息
    &quot;id&quot;: &quot;78&quot; //试卷id
    &quot;doTime&quot;: 3  //耗时
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: &quot;0&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-8-获取当前用户信息" tabindex="-1"><a class="header-anchor" href="#_4-2-8-获取当前用户信息" aria-hidden="true">#</a> 4.2.8 获取当前用户信息</h3><ul><li>接口地址：/api/wx/student/user/current</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 34,
        &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;, //用户uuid
        &quot;userName&quot;: &quot;student&quot;, //用户名
        &quot;realName&quot;: &quot;学生&quot;, //真实姓名
        &quot;age&quot;: 18, //年龄
        &quot;role&quot;: 1, //角色
        &quot;sex&quot;: 1, //性别
        &quot;birthDay&quot;: &quot;2019-09-17&quot;, //生日
        &quot;phone&quot;: &quot;158800882&quot;, //手机号
        &quot;lastActiveTime&quot;: &quot;&quot;,
        &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;, //创建时间
        &quot;modifyTime&quot;: &quot;2021-09-15 18:38:34&quot;, //修改时间
        &quot;status&quot;: 1, //状态
        &quot;userLevel&quot;: 1, //年级
        &quot;userLevelStr&quot;: &quot;一年级&quot;, //年级
        &quot;classes&quot;: &quot;1班&quot;, //班级
        &quot;imagePath&quot;: &quot;&quot; //用户头像
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-9-用户信息更新" tabindex="-1"><a class="header-anchor" href="#_4-2-9-用户信息更新" aria-hidden="true">#</a> 4.2.9 用户信息更新</h3><ul><li>接口地址：/api/wx/student/user/update</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &quot;realName&quot;: &quot;学生&quot;,  //真实姓名
    &quot;age&quot;: 18, //年龄
    &quot;sex&quot;: &quot;1&quot;, //性别
    &quot;birthDay&quot;: &quot;2019-09-17&quot;,  //出生日期
    &quot;phone&quot;: &quot;158800882&quot; //手机号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 34,
        &quot;userUuid&quot;: &quot;d2d29da2-dcb3-4013-b874-727626236f47&quot;,  //用户uuid
        &quot;userName&quot;: &quot;student&quot;, //用户名
        &quot;realName&quot;: &quot;学生&quot;,  //真实姓名
        &quot;age&quot;: 18, //年龄
        &quot;role&quot;: 1, //角色
        &quot;sex&quot;: 1, //性别
        &quot;birthDay&quot;: &quot;2019-09-17 00:00:00&quot;, //出生日期
        &quot;phone&quot;: &quot;158800882&quot;, //手机号
        &quot;lastActiveTime&quot;: &quot;&quot;, //最好活动时间
        &quot;createTime&quot;: &quot;2019-09-07 18:55:02&quot;, //创建时间
        &quot;modifyTime&quot;: &quot;2021-09-23 21:20:34&quot;, //修改时间
        &quot;status&quot;: 1, //状态
        &quot;userLevel&quot;: 1, //年级
        &quot;userLevelStr&quot;: null,  //年级
        &quot;classes&quot;: null, //班级
        &quot;imagePath&quot;: &quot;&quot; //头像
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-10-用户动态" tabindex="-1"><a class="header-anchor" href="#_4-2-10-用户动态" aria-hidden="true">#</a> 4.2.10 用户动态</h3><ul><li>接口地址：/api/wx/student/user/log</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: [
        {
            &quot;id&quot;: 6136,  
            &quot;userId&quot;: 1, //用户id
            &quot;userName&quot;: &quot;student&quot;, //用户名
            &quot;realName&quot;: &quot;学生&quot;, //真实姓名
            &quot;content&quot;: &quot;student 登录了学之思开源考试系统&quot;, //日志内容
            &quot;createTime&quot;: &quot;2021-09-24 21:52:05&quot; //创建时间
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-11-消息列表" tabindex="-1"><a class="header-anchor" href="#_4-2-11-消息列表" aria-hidden="true">#</a> 4.2.11 消息列表</h3><ul><li>接口地址：/api/wx/student/user/message/page</li><li>请求参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    pageIndex: 1,  //页码
    pageSize: 20   //每页数量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;total&quot;: 7,
        &quot;list&quot;: [
            {
                &quot;id&quot;: 34, //消息
                &quot;title&quot;: &quot;国庆假说明&quot;,  //消息标题
                &quot;messageId&quot;: 17,  //消息id
                &quot;content&quot;: &quot;假期七天请注意安全。。。&quot;,  //消息内容
                &quot;readed&quot;: true, //是否已读
                &quot;createTime&quot;: &quot;2021-09-25 14:51:32&quot;, //创建时间
                &quot;sendUserName&quot;: &quot;admin&quot; //发送人用户名
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-12-消息详情" tabindex="-1"><a class="header-anchor" href="#_4-2-12-消息详情" aria-hidden="true">#</a> 4.2.12 消息详情</h3><ul><li>接口地址：/api/wx/student/user/message/read/26</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: {
        &quot;id&quot;: 34,
        &quot;title&quot;: &quot;国庆假说明&quot;,  //消息标题
        &quot;content&quot;: &quot;假期七天请注意安全。。。&quot;,  //消息内容
        &quot;createTime&quot;: &quot;2021-09-25 14:51:32&quot;,  //创建时间
        &quot;sendUserId&quot;: 2, //发送人id
        &quot;sendUserName&quot;: &quot;admin&quot;, //发送人用户名
        &quot;sendRealName&quot;: &quot;管理员&quot;, //发送人真实姓名
        &quot;receiveUserCount&quot;: 4,
        &quot;readCount&quot;: 1 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-13-消息未读数" tabindex="-1"><a class="header-anchor" href="#_4-1-13-消息未读数" aria-hidden="true">#</a> 4.1.13 消息未读数</h3><ul><li>接口地址：/api/wx/student/user/message/unreadCount</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: 0  //未读消息数量
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-14-消息标记已读" tabindex="-1"><a class="header-anchor" href="#_4-1-14-消息标记已读" aria-hidden="true">#</a> 4.1.14 消息标记已读</h3><ul><li>接口地址：/api/wx/student/user/message/read/14</li><li>请求参数：无</li><li>返回参数：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;code&quot;: 1,
    &quot;message&quot;: &quot;成功&quot;,
    &quot;response&quot;: null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74),t=[s];function l(a,o){return i(),n("div",null,t)}const r=e(d,[["render",l],["__file","wx.html.vue"]]);export{r as default};
