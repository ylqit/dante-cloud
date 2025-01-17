/*
 * Copyright (c) 2020-2030 ZHENGGENGWEI(码匠君)<herodotus@aliyun.com>
 *
 * Dante Cloud licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Dante Cloud 采用APACHE LICENSE 2.0开源协议，您在使用过程中，需要注意以下几点：
 *
 * 1.请不要删除和修改根目录下的LICENSE文件。
 * 2.请不要删除和修改 Dante Cloud 源码头部的版权声明。
 * 3.请保留源码和相关描述文件的项目出处，作者声明等。
 * 4.分发源码时候，请注明软件出处 https://gitee.com/dromara/dante-cloud
 * 5.在修改包名，模块名称，项目代码等时，请注明软件出处 https://gitee.com/dromara/dante-cloud
 * 6.若您的项目无法满足以上几点，可申请商业授权
 */

package cn.herodotus.dante.service.autoconfigure;

import cn.herodotus.dante.module.security.processor.HerodotusSecurityMetadataSource;
import cn.herodotus.engine.assistant.core.enums.Target;
import cn.herodotus.engine.oauth2.core.processor.HerodotusSecurityConfigureHandler;
import cn.herodotus.engine.oauth2.core.properties.SecurityProperties;
import cn.herodotus.engine.oauth2.core.response.HerodotusAccessDeniedHandler;
import cn.herodotus.engine.oauth2.core.response.HerodotusAuthenticationEntryPoint;
import cn.herodotus.engine.oauth2.metadata.processor.ExpressionSecurityMetadataParser;
import cn.herodotus.engine.oauth2.server.resource.converter.HerodotusJwtAuthenticationConverter;
import cn.herodotus.engine.oauth2.server.resource.introspector.HerodotusOpaqueTokenIntrospector;
import cn.herodotus.engine.web.core.properties.EndpointProperties;
import org.springframework.boot.actuate.autoconfigure.security.servlet.EndpointRequest;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.server.resource.web.DefaultBearerTokenResolver;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;

/**
 * <p>Description: 资源服务器配置 </p>
 *
 * @author : gengwei.zheng
 * @date : 2022/1/21 23:56
 */
@EnableWebSecurity
public class ResourceServerAutoConfiguration {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity,
                                                   HerodotusSecurityConfigureHandler herodotusSecurityConfigureHandler,
                                                   ExpressionSecurityMetadataParser securityMetadataExpressionParser,
                                                   HerodotusSecurityMetadataSource herodotusSecurityMetadataSource,
                                                   JwtDecoder jwtDecoder,
                                                   SecurityProperties securityProperties,
                                                   OAuth2ResourceServerProperties resourceServerProperties,
                                                   EndpointProperties endpointProperties) throws Exception {

        httpSecurity.csrf().disable().cors();
        // @formatter:off
        httpSecurity.authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .antMatchers(herodotusSecurityConfigureHandler.getPermitAllArray()).permitAll()
                                .antMatchers(herodotusSecurityConfigureHandler.getStaticResourceArray()).permitAll()
                                .requestMatchers(EndpointRequest.toAnyEndpoint()).permitAll()
                                .anyRequest().authenticated()
                                .withObjectPostProcessor(new ObjectPostProcessor<FilterSecurityInterceptor>() {
                                    @Override
                                    public <O extends FilterSecurityInterceptor> O postProcess(O fsi) {
                                        securityMetadataExpressionParser.setFilterInvocationSecurityMetadataSource(fsi.getSecurityMetadataSource());
                                        fsi.setSecurityMetadataSource(herodotusSecurityMetadataSource);
                                        return fsi;
                                    }
                                }));

        if (securityProperties.getValidate() == Target.REMOTE) {
            httpSecurity.oauth2ResourceServer(configurer -> configurer
                    .opaqueToken(opaque -> opaque.introspector(new HerodotusOpaqueTokenIntrospector(endpointProperties, resourceServerProperties)))
                    .accessDeniedHandler(new HerodotusAccessDeniedHandler())
                    .authenticationEntryPoint(new HerodotusAuthenticationEntryPoint()));
        } else {
            httpSecurity.oauth2ResourceServer(configurer -> configurer
                    .jwt(jwt -> jwt.decoder(jwtDecoder).jwtAuthenticationConverter(new HerodotusJwtAuthenticationConverter()))
                    .bearerTokenResolver(new DefaultBearerTokenResolver())
                    .accessDeniedHandler(new HerodotusAccessDeniedHandler())
                    .authenticationEntryPoint(new HerodotusAuthenticationEntryPoint()));
        }
        // @formatter:on
        return httpSecurity.build();
    }
}
