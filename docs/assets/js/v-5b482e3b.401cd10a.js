"use strict";(self.webpackChunkeurynome_cloud_document=self.webpackChunkeurynome_cloud_document||[]).push([[961],{7149:(i,l,e)=>{e.r(l),e.d(l,{data:()=>a});const a={key:"v-5b482e3b",path:"/others/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.html",title:"更新日志",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"v2.5.5.20",slug:"v2-5-5-20",children:[]},{level:2,title:"v2.5.5.10",slug:"v2-5-5-10",children:[]},{level:2,title:"v2.5.5.0",slug:"v2-5-5-0",children:[]},{level:2,title:"v2.5.4.140",slug:"v2-5-4-140",children:[]},{level:2,title:"v2.5.4.130",slug:"v2-5-4-130",children:[]},{level:2,title:"v2.5.4.120",slug:"v2-5-4-120",children:[]},{level:2,title:"v2.5.4.110",slug:"v2-5-4-110",children:[]},{level:2,title:"v2.5.4.100",slug:"v2-5-4-100",children:[]},{level:2,title:"v2.5.4.90",slug:"v2-5-4-90",children:[]},{level:2,title:"v2.5.4.80",slug:"v2-5-4-80",children:[]},{level:2,title:"v2.5.4.65",slug:"v2-5-4-65",children:[]},{level:2,title:"v2.5.4.60",slug:"v2-5-4-60",children:[]},{level:2,title:"v2.5.4.55",slug:"v2-5-4-55",children:[]},{level:2,title:"v2.5.4.50",slug:"v2-5-4-50",children:[]},{level:2,title:"v2.5.4.40",slug:"v2-5-4-40",children:[]},{level:2,title:"v2.5.4.30",slug:"v2-5-4-30",children:[]},{level:2,title:"v2.5.4.20",slug:"v2-5-4-20",children:[]},{level:2,title:"v2.5.4.10",slug:"v2-5-4-10",children:[]},{level:2,title:"v2.5.3.60",slug:"v2-5-3-60",children:[]},{level:2,title:"v2.5.3.50",slug:"v2-5-3-50",children:[]},{level:2,title:"v2.5.3.40",slug:"v2-5-3-40",children:[]},{level:2,title:"v2.5.3.30",slug:"v2-5-3-30",children:[]},{level:2,title:"v2.5.3.10",slug:"v2-5-3-10",children:[]},{level:2,title:"2.5.2.40",slug:"_2-5-2-40",children:[]},{level:2,title:"v2.5.2.30",slug:"v2-5-2-30",children:[]},{level:2,title:"v2.5.2.25",slug:"v2-5-2-25",children:[]},{level:2,title:"v2.5.2.20",slug:"v2-5-2-20",children:[]},{level:2,title:"v2.5.1.0",slug:"v2-5-1-0",children:[]},{level:2,title:"v2.4.5.60",slug:"v2-4-5-60",children:[]},{level:2,title:"v2.4.5.48",slug:"v2-4-5-48",children:[]}],filePathRelative:"others/更新日志.md",git:{updatedTime:1632924477e3,contributors:[{name:"herodotus",email:"pointer_v@qq.com",commits:6}]}}},9254:(i,l,e)=>{e.r(l),e.d(l,{default:()=>t});const a=(0,e(6252).uE)('<h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1><h2 id="v2-5-5-20" tabindex="-1"><a class="header-anchor" href="#v2-5-5-20" aria-hidden="true">#</a> v2.5.5.20</h2><ul><li><p>重大更新</p><ol><li>Spring Boot Admin 升级至 2.5.2</li><li>基于最新版Axios定义，所有Delete接口，修改为路径参数形式</li><li>混合 RSA(非对称) 和 AES(对称加密) 算法，基于自定义注解，设计接口数据前后端加密传输机制。</li><li>设计自定义数据传输 Session，规避 Vue Session 变化问题。基于自定义Session，实现 AES KEY 动态生成、加密传输、一人一钥的安全机制，提高系统安全性。</li><li>实现 OAuth 2 密码模式，用户名、密码参数加密传输。</li></ol></li><li><p>其它更新</p><ol><li>修复 Spring Validation 错误信息不会抛出，循环引用问题。</li><li>前端 Utils 工具包，新增加密算法模块</li><li>基于最新版Axios定义，优化 Axios 请求通用代码</li><li>实现前端 node-rsa 包 RSA 算法，与后端 Hutool SecureUtil RSA 算法互相加、解密。</li></ol></li><li><p>依赖包版本升级</p><ol><li>Guava 升级至 31.0.1-jre</li><li>SpringDoc 升级至 1.5.11</li><li>Mybatis Plus Generator 升级至 3.5.1</li><li>前端工程升级大量依赖包</li></ol></li></ul><h2 id="v2-5-5-10" tabindex="-1"><a class="header-anchor" href="#v2-5-5-10" aria-hidden="true">#</a> v2.5.5.10</h2><ol><li>解决 OAuth2 自带业务表通过 Spring Data JPA 自动创建，字段名变化为小写问题。</li><li>完善前端 Camnuda 工作流编辑器组件功能。</li><li>完善前端部分功能，解决已知问题。</li><li>更新在线文档，补充前端工程详细介绍。</li></ol><h2 id="v2-5-5-0" tabindex="-1"><a class="header-anchor" href="#v2-5-5-0" aria-hidden="true">#</a> v2.5.5.0</h2><ul><li><p>重大更新</p><ol><li>Spring Boot 升级至 2.5.5</li><li>Spring Cloud 升级至 2020.0.4</li><li>大幅改进系统数据库表和数据初始化方式，实现OAuth2业务表自动创建，取消使用脚本的创建方式，提升便捷性</li><li>新增人力资源管理相关功能，功能和模型设计实现与Camunda用户体系统一。便于用户体系数据的同步和管理。</li><li>基于rollup、lerna 和 yarn workspaces，以 monorepo 方式重新构建前端工程。新版前端工程是以Vue2、Typescript开发的，组件库式的前端功能。代码更清晰、组件化和重用化程度更高。为升级至Vue3做前序铺垫。</li></ol></li><li><p>其它更新</p><ol><li>解决Skywalking UI连接Skywalking OAP Server出错问题。</li><li>修改防刷机制的默认配置</li><li>重新梳理错误体系，优化错误信息，错误提示更加友好。</li><li>解决单体版对Basic模式认证跨域拦截的问题</li><li>实现OAuth2 Password模式部分参数加密传输方式，提升系统安全性。</li><li>修复老版本前端工程已知问题。</li><li>在线文档同步更新。</li></ol></li><li><p>依赖包版本升级</p><ol><li>Hutool 升级至 5.7.13</li><li>okhttps 升级至 3.1.5</li><li>weixin-java-miniapp 升级至 4.1.9.B</li><li>JustAuth 升级至 1.16.4</li><li>jasypt-spring-boot-starter 升级至 3.0.4</li><li>mybatis-plus-boot-starter 升级至3.4.3.4</li><li>dysmsapi20170525 升级至 2.0.5</li></ol></li></ul><h2 id="v2-5-4-140" tabindex="-1"><a class="header-anchor" href="#v2-5-4-140" aria-hidden="true">#</a> v2.5.4.140</h2><ol><li>优化Antisamy通用代码，提升Xss分析西能，去除严格拦截导致的JSON解析错误。</li><li>解决本地权限缓存并发写入冲突，抛出com.esotericsoftware.kryo.KryoException: java.util.ConcurrentModificationException问题。</li><li>解决OAuth Starter引入Upms Logic 重复导入权限数据问题。</li><li>修改默认验证码字体配置</li><li>去除无用依赖包</li><li>新增MySQL57数据库切换配置。更新Nacos 配置SQL脚本，增加最新导入包。</li><li>新增Camunda 官方脚本</li><li>优化数据导入脚本</li></ol><h2 id="v2-5-4-130" tabindex="-1"><a class="header-anchor" href="#v2-5-4-130" aria-hidden="true">#</a> v2.5.4.130</h2><ol><li>修复单体版Knife4j依赖错误问题</li><li>修复单体版配置错误问题</li><li>增加Gitee流程模版</li><li>修复OAuth2自定义confirm_access.html,error.html,login.html页面，数据类型编译错误。</li><li>优化自定义页面显示内容，增加Exception StackTrace输出</li><li>修复XssUtils校验出错问题。</li><li>优化ResourceServer安全配置</li><li>修复OAuth2 四种模式中授权码模式（Authorization Code）、隐式授权模式（Implicit Grant）模式出错问题。</li><li>解决前端控制台出错问题</li><li>更新在线文档，增加OAuth2 四种模式验证说明</li></ol><h2 id="v2-5-4-120" tabindex="-1"><a class="header-anchor" href="#v2-5-4-120" aria-hidden="true">#</a> v2.5.4.120</h2><ol><li>使用Springdoc全面替换Springfox，配置更灵活、配置更多样</li><li>Swagger文档注解全面升级为支持OpenAPI</li><li>使用Springdoc重构文档聚合功能，支持聚合查阅和服务独立查阅。Knife4j同步升级至3.0.3版本。</li><li>Swagger文档默认支持OAuth2 Password、Authorization Code 两种认证流程</li><li>整合Camunda Engine Rest 与Swagger，实现Camunda API接口文档查阅，支持聚合查阅。</li><li>修复Bpmn服务默认启动Tomcat问题。</li><li>升级前端依赖包版本</li><li>更新Nacos配置文件及导入包</li><li>更新在线文档</li></ol><h2 id="v2-5-4-110" tabindex="-1"><a class="header-anchor" href="#v2-5-4-110" aria-hidden="true">#</a> v2.5.4.110</h2><ol><li>重新构建项目文档体系，使用纯静态页面，替代已有 Gitee Wiki 文档。优化文档结构，提升文档阅读体验。提供全文搜索，便于文档查阅。支持文档独立部署，方便使用者搭建独立的文档服务查阅。</li><li>更换Nacos导入包，解决上一版本导入包导入重复问题</li><li>Update Readme</li></ol><h2 id="v2-5-4-100" tabindex="-1"><a class="header-anchor" href="#v2-5-4-100" aria-hidden="true">#</a> v2.5.4.100</h2><ol><li>重新梳理所有Nacos配置，提取共性配置至统一配置文件，优化配置属性结构和归类，便于参数修改，降低维护复杂度</li><li>重构数据库相关Nacos配置，优化Maven、Nacos多环境配置与数据库切换的联动性，让数据库切换所需修改的参数更少，切换更顺滑</li><li>解决eurynome-cloud-management编译出现的Failed to execute goal org.apache.maven.plugins:maven-resources-plugin:3.2.0:resources (default-resources) on 4. project XXXX: Input length = 1 -&gt; [Help 1]错误</li><li>解决Redis设置密码后，无法连接出现 NOAUTH Authentication required 错误</li><li>增加MySQL数据库默认数据初始化脚本</li><li>增加最新版Nacos配置导入包</li><li>修复前端UI申请APPKEY页面错误</li><li>修复前端UI切换至单体版后，连接错误问题。</li><li>升级前端UI依赖包版本。</li><li>同步更新相关文档，补充新建子模块、常见问题等部分文档。</li></ol><h2 id="v2-5-4-90" tabindex="-1"><a class="header-anchor" href="#v2-5-4-90" aria-hidden="true">#</a> v2.5.4.90</h2><ol><li>使用Mybatis Plus全面替换已有Mybatis，与Spring Boot Data JPA共存且支持同时使用。使用任何技术都可以无障碍的进行业务代码编写。</li><li>整合Mybatis Plus和Spring Boot Data JPA更换数据库配置属性，一处修改即可以同时修改Mybatis Plus和Spring Boot Data JPA使用数据库类型。</li><li>新增接口XSS脚本攻击过滤机制，同时支持请求参数和JSON请求体过滤。采用Ebay XSS过滤模型，进一步提升防控能力。</li><li>新增SQL 注入攻击防控机制。</li><li>解决eurynome-cloud-gateway和eurynome-cloud-management服务启动调用Kafka问题。</li><li>解决CacheConfigException错误问题，在错误体系中增加配置参数不合理提醒，让信息反馈更加友好。</li><li>解决Spring Boot Admin 不支持Java 8 时间类型问题。</li><li>解决Spring Boot Admin 不显示 Git Properties 信息问题。</li><li>解决修改Redis密码配置生效问题</li><li>梳理dependencies依赖包，对已有依赖进行进行更合理的分类，更加便于依赖包的找寻和维护。</li><li>升级依赖包版本 <ul><li>spring-boot-admin 升级至 2.5.1</li><li>git-commit-id-plugin 升级至 4.9.10</li><li>docker-maven-plugin 升级至 0.37.0</li><li>hutool 升级至 5.7.10</li><li>okhttps 升级至 3.1.4</li><li>JustAuth 升级至1.16.3</li><li>aliyun-java-sdk-core 升级至 4.5.25</li><li>baiducloud-java-sdk 升级至 0.10.175</li><li>aliyun-java-sdk-oss 升级至 3.13.1</li><li>cn.jpush.api 升级至 3.5.2</li></ul></li><li>规范项目文档，增加系统部署、数据库切换等多部分内容</li><li>增加Nacos配置导入包，在没有自动部署功能支持的情况下，也可以更加方便的导入配置。</li><li>替换 UI SweetAlert 过期方法，解决弹出框不会关闭问题</li><li>解决授权码模式（authorization code）验证码被拦截问题</li></ol><h2 id="v2-5-4-80" tabindex="-1"><a class="header-anchor" href="#v2-5-4-80" aria-hidden="true">#</a> v2.5.4.80</h2><ul><li>合并eurynome-cloud-curd包和eurynome-cloud-rest包，减少包数量，提升代码维护便捷度。</li><li>增加接口幂等处理机制，防止重复提交。增加接口防刷限制机制，防止接口恶意频繁刷新。</li><li>接口幂等和防刷机制，均支持全局配置控制，同时提供@Idempotent和@AccessLimited注解进行灵活的、个性化的配置。</li><li>接口幂等和防刷机制，缓存标记采用分布式多级缓存进行存储，将低单一访问Redis带来的访问压力，同时支持多实例数据多级缓存本地数据同步。</li><li>接口幂等和防刷机制，所涉及标记缓存时间配置全部统一支持Duration时间格式，简化配置参数，提升配置便捷度。同时，优化平台错误响应体系，返回更加友好的错误信息提示。</li><li>定义Stamp签章体系，采用统一体系，对SMS短信验证码、JustAuth State、环信Token以及接口幂等和防刷等需临时存储标记相关应用进行统一实现。同时，采用分布式多级缓存进行数据存储，降低单一访问Redis压力。</li></ul><h2 id="v2-5-4-65" tabindex="-1"><a class="header-anchor" href="#v2-5-4-65" aria-hidden="true">#</a> v2.5.4.65</h2><ul><li>优化Skywalking打包内容，直接使用Skywalking官方容器</li><li>补充RequestMappingScanner对应事件代码，解决单体版扫描Rest API接口后不会存储问题</li><li>优化数据库脚本以及数据库表结构和默认数据自动初始化机制。解决在第一次运行时，Spring Data JPA JDBC初始化机制与Hibernate 初始化机制冲突问题。</li><li>在Gitee Wiki中，增加数据库初始化说明文档</li><li>删除部分预留代码，减少暂时不必要的代码对使用者带来的误导。</li><li>前端UI中，增加部分配置，使用者可以通过注释部分配置，让前端UI快速支持单体版。</li></ul><h2 id="v2-5-4-60" tabindex="-1"><a class="header-anchor" href="#v2-5-4-60" aria-hidden="true">#</a> v2.5.4.60</h2><ul><li>Spring Boot 版本升级至 2.5.4</li><li>Skywalking 版本升级至 8.7.0</li><li>微服务日志输出至日志中心格式。</li><li>增加Swagger注入条件注解，优化日志中心相关配置采用统一常量控制</li><li>增加自定义Property&quot;助手&quot;数据统一自动编译生成配置，无须额外设置，在IDE中编辑配置属性时可自动弹出提示</li><li>修复Kafka配置不生效问题。</li><li>解决单体版自动启动Kafka问题。</li><li>暂时关闭单体版Swagger，规避Swagger会自动启动Kafka问题。</li></ul><h2 id="v2-5-4-55" tabindex="-1"><a class="header-anchor" href="#v2-5-4-55" aria-hidden="true">#</a> v2.5.4.55</h2><ul><li>整合代码，将constant包代码整合至common包中。删除constant包。</li><li>完善Rest接口校验机制，以及相关自定义错误码</li><li>统一spring boot validation错误信息，将其整合至平台统一响应实体Result中。无须在各个Rest接口中，添加BindingResult参数。</li></ul><h2 id="v2-5-4-50" tabindex="-1"><a class="header-anchor" href="#v2-5-4-50" aria-hidden="true">#</a> v2.5.4.50</h2><ul><li>优化服务本地权限存储逻辑，解决权限属性数据重复存储，不会替换问题。</li><li>重新梳理Spring Security OAuth2 方法级表达式动态权限鉴权逻辑，摒弃无用的权限验证Voter逻辑，使用统一逻辑实现@PreAuthorize注解权限的全面动态可配置化。统一平台接口- 白名单，IP地址白名单，以及Scope绑定URL的管理。</li><li>重构UserDetails用户信息组织逻辑，使用Spring Security标准代码，替换自定义逻辑代码，降低代码冗余，与自研方法级动态权限完美融合。</li><li>优化平台权限从Controller扫描、汇总存储至服务器以及动态修改后最终回传同步至服务的整理逻辑以及事件流。完美支持单体式架构、UPMS自身应用需求、分布式架构以及分布式各服- 务多实例等各种应用场景。</li><li>修复部分已知BUG，将部分代码中日志由@Slf4j改回传统日志编写方式，一方面提高编译效率，另一方面解决源代码包查看时Idea提醒代码不一致问题。</li><li>清理系统无用代码。</li><li>增加方法级动态权限演示动图，更新Readme</li></ul><h2 id="v2-5-4-40" tabindex="-1"><a class="header-anchor" href="#v2-5-4-40" aria-hidden="true">#</a> v2.5.4.40</h2><ul><li>优化自定义多级缓存，实现可以统一设置allowNullValues值，并解决存储空值时卡死问题。</li><li>重新梳理、优化系统权限从Controller扫描、汇总存储至服务器以及动态修改后最终回传同步至服务的整理逻辑以及事件流。完美支持单体式架构、UPMS自身应用需求、分布式架构以及- - 分布式各服务多实例等各种应用场景。</li><li>增加Kafka条件注入配置，将条件转换为@ConditionalOnXXX，方便管理和维护。避免单体版应用相关依赖过度依赖Kafka而导致的无法启动</li><li>修复部分已知BUG，将部分代码中日志由@Slf4j改回传统日志编写方式，一方面提高编译效率，另一方面解决源代码包查看时Idea提醒代码不一致问题。</li><li>去除传统Kafka Producer 通用类，改为统一使用 Spring Cloud Bus</li></ul><h2 id="v2-5-4-30" tabindex="-1"><a class="header-anchor" href="#v2-5-4-30" aria-hidden="true">#</a> v2.5.4.30</h2><ul><li>重新调整Property配置，规范Property定义。修改相关配置</li><li>调整包，以及包相关依赖关系。让包之间的依赖更加合理</li><li>增加Kafka配置，增加@KafkaListener动态控制，以避免在不需要的情况下Kafka的自动开启。</li><li>调整部分常理代码位置，常量代码基本调整完成</li><li>将原有自定义条件，转换为@ConditionalOnXXX注解，让使用更加便捷</li><li>日志中心是否开启状态，改为@ConditionalOnLogCenterEnabled注解</li></ul><h2 id="v2-5-4-20" tabindex="-1"><a class="header-anchor" href="#v2-5-4-20" aria-hidden="true">#</a> v2.5.4.20</h2><ul><li>本地权限缓存更换为JetCache，为服务多实例的权限扫描和存储提供更好的支持</li><li>将数据访问策略从Conditional类，升级为Conditional注解，使用更加便捷</li><li>调整包依赖关系，新建assistant、constant包，删除message包。</li><li>逐步将平台中各类非独有常量移入constant包方便管理和修改</li><li>采用Spring Boot Event和Spring Cloud Bus Event 机制重构接口收集逻辑。支持单体架构、UPMS、分布式多实例等不同场景接口扫描的特殊需求</li><li>优化Docker Compose配置，使用Debezium Kafka 替换已有kafka，以支持Debezium应用</li><li>删除无用代码</li></ul><h2 id="v2-5-4-10" tabindex="-1"><a class="header-anchor" href="#v2-5-4-10" aria-hidden="true">#</a> v2.5.4.10</h2><ul><li>全网首个实现Spring Security 动态URL权限与注解表达式权限有机整合，并且可以动态配置的微服务框架。</li><li>全面支持方法级权限控制，Security OAuth2 permitAll等方法权限以及@PreAuthorize注解权限，均支持动态配置。目前支持以下权限的动态配置： · hasRole · hasAnyRole · hasAuthority · hasAnyAuthority · hasIpAddress · #oauth2.clientHasRole · #oauth2.clientHasAnyRole · #oauth2.hasScope · #oauth2.hasAnyScope · #oauth2.hasScopeMatching · #oauth2.hasAnyScopeMatching · #oauth2.denyOAuthClient · #oauth2.isOAuth · #oauth2.isUser · #oauth2.isClient</li><li>彻底解决使用withObjectPostProcessor方式，会覆盖外部匹配规则问题。</li><li>真正实现Scope权限与URL权限的关联与管控，拓展OAuth2默认只进行Scope简单对比的实现逻辑。</li><li>实现动态权限配置的多服务同步。</li><li>暂时去除JetCache，全面使用自研支持Hibernate二级缓存的多级缓存。</li><li>修改配置文件配置</li><li>删除无用代码</li></ul><h2 id="v2-5-3-60" tabindex="-1"><a class="header-anchor" href="#v2-5-3-60" aria-hidden="true">#</a> v2.5.3.60</h2><ul><li>Nacos版本升级至2.0.3</li><li>Hutool版本升级至5.7.6</li><li>修改部分代码名称</li><li>修改配置文件配置参数</li></ul><h2 id="v2-5-3-50" tabindex="-1"><a class="header-anchor" href="#v2-5-3-50" aria-hidden="true">#</a> v2.5.3.50</h2><ul><li>将所有服务包括UAA的权限存储，改为本地和认证中心，多级分布式存储和验证。</li><li>增加策略模式，支持认证中心权限数据直连和远程消息两种存储方式动态切换。</li><li>改进自研多级缓存，解决Hibernate二级缓存进行数据缓存时产生的事务锁问题。</li><li>删除无用代码</li><li>为动态Scope权限做铺垫。</li><li>全面支持方法级权限控制。</li></ul><h2 id="v2-5-3-40" tabindex="-1"><a class="header-anchor" href="#v2-5-3-40" aria-hidden="true">#</a> v2.5.3.40</h2><ul><li>Spring Boot 版本升级至 2.5.3</li><li>采用新的Hash算法，缩短权限标识；简化用户权限信息，以缩短平台生成JWT Token的长度</li><li>git commit 插件由pl.project13.maven » git-commit-id-plugin改为io.github.git-commit-id » git-commit-id-maven-plugin。</li><li>git commit 插件升级至 5.0.0 版本</li></ul><h2 id="v2-5-3-30" tabindex="-1"><a class="header-anchor" href="#v2-5-3-30" aria-hidden="true">#</a> v2.5.3.30</h2><ul><li>重构用户中心用户人员体系，将平台用户、第三方社交登录用户、人事管理用户以及Camunda工作流用户体系无缝融合。</li><li>人事管理体系人员唯一化管理，同时支持企业、党组、团青等多种类型的机构类型，便于企业人事管理。</li><li>基于Debezium实现数据库变更数据捕获，实现人事管理信息与Camunda工作流用户实时同步。</li><li>树形结构通用代码实现逻辑与Hutool Tree一致，因此采用Hutool Tree 全面替换已有的Tree代码。</li><li>删除不再使用的通用类代码。</li><li>修改说明文档</li></ul><h2 id="v2-5-3-10" tabindex="-1"><a class="header-anchor" href="#v2-5-3-10" aria-hidden="true">#</a> v2.5.3.10</h2><ul><li>自研基于Caffeine和Redis分布式两级缓存</li><li>完美支持JPA Hibernate二级缓存</li><li>完美支持各类查询数据缓存以及JPA @ManyToMany, @ManyToOne等关联查询。</li><li>实现基于Caffeine的Hibernate二级缓存，可与自研两级缓存快速切换，仅使用本地缓存。</li><li>极大的简化了原有自研的基于JetCache的缓存使用方式。</li><li>保留JetCache，可根据实际使用需要使用。</li><li>已有服务接口相关代码，均已更新自研分布式两级缓存模式。</li></ul><h2 id="_2-5-2-40" tabindex="-1"><a class="header-anchor" href="#_2-5-2-40" aria-hidden="true">#</a> 2.5.2.40</h2><ul><li>Redis Value 默认序列化工具修改为Jackson2JsonRedisSerializer</li><li>jetcache valueEncoder 和 valueDecoder 修改为kryo</li><li>部分代码的日志改为传统方式，不再使用@Slf4j注解</li><li>抽象实体共性属性，拓展基础实体，以支持JPA视图类的ORM映射。</li><li>重构基础Service，将基础Service的读操作与其它操作分离，以支持“视图”相关Service的编写。</li><li>重构基础Controller，将基础Controller的读操作与其它操作分离，以支持“视图”相关Controller的编写。</li><li>将Hibernate Validator替换为spring-boot-starter-validation</li><li>删除JPA过期方法封装</li></ul><h2 id="v2-5-2-30" tabindex="-1"><a class="header-anchor" href="#v2-5-2-30" aria-hidden="true">#</a> v2.5.2.30</h2><ul><li>Spring Boot 版本升级至2.5.2</li><li>Spring Boot Admin 版本升级至2.4.2</li><li>升级其它相关依赖版本</li></ul><h2 id="v2-5-2-25" tabindex="-1"><a class="header-anchor" href="#v2-5-2-25" aria-hidden="true">#</a> v2.5.2.25</h2><ul><li>Skywalking升级至8.6.0</li></ul><h2 id="v2-5-2-20" tabindex="-1"><a class="header-anchor" href="#v2-5-2-20" aria-hidden="true">#</a> v2.5.2.20</h2><ul><li>Spring Boot 升级至2.5.1</li><li>Camunda 升级至7.15.0</li><li>其它依赖包版本升级</li><li>Swagger回滚至2.9.2，解决Swagger接口测试相关问题以及Knife4 Authorize不显示问题</li><li>结构性调整平台相关配置属性</li></ul><h2 id="v2-5-1-0" tabindex="-1"><a class="header-anchor" href="#v2-5-1-0" aria-hidden="true">#</a> v2.5.1.0</h2><ul><li>Spring Boot 大版本升级至2.5.0</li></ul><h2 id="v2-4-5-60" tabindex="-1"><a class="header-anchor" href="#v2-4-5-60" aria-hidden="true">#</a> v2.4.5.60</h2><ul><li>修改负载均衡不生效问题</li><li>调整包依赖关系</li><li>升级版本</li></ul><h2 id="v2-4-5-48" tabindex="-1"><a class="header-anchor" href="#v2-4-5-48" aria-hidden="true">#</a> v2.4.5.48</h2><ul><li>正式发布开源版本</li></ul>',61),t={render:function(i,l){return a}}}}]);