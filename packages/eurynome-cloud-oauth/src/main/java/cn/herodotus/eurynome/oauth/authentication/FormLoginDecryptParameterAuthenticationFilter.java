/*
 * Copyright (c) 2019-2021 Gengwei Zheng(herodotus@aliyun.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Project Name: eurynome-cloud
 * Module Name: eurynome-cloud-oauth
 * File Name: FormLoginDecryptParameterAuthenticationFilter.java
 * Author: gengwei.zheng
 * Date: 2021/05/07 11:28:07
 */

package cn.herodotus.eurynome.oauth.authentication;

import cn.herodotus.eurynome.oauth.utils.SymmetricUtils;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * <p> Description : 自定义表单登录参数加密filter </p>
 *
 * @author : gengwei.zheng
 * @date : 2020/1/27 17:38
 */
@Slf4j
public class FormLoginDecryptParameterAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    public FormLoginDecryptParameterAuthenticationFilter() {
        super();

    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        if (!request.getMethod().equals(HttpMethod.POST.name())) {
            throw new AuthenticationServiceException(
                    "Authentication method not supported: " + request.getMethod());
        }

        UsernamePasswordAuthenticationToken authRequest = getAuthenticationToken(request);

        // Allow subclasses to set the "details" property
        setDetails(request, authRequest);


        return this.getAuthenticationManager().authenticate(authRequest);
    }

    private UsernamePasswordAuthenticationToken getAuthenticationToken(
            HttpServletRequest request) {

        String username = obtainUsername(request);
        String password = obtainPassword(request);
        String key = request.getParameter("symmetric");

        if (StringUtils.isBlank(username)) {
            username = "";
        }

        if (StringUtils.isBlank(password)) {
            password = "";
        }

        if (StringUtils.isNotBlank(username) && StringUtils.isNotBlank(password)) {
            byte[] byteKey = SymmetricUtils.getDecryptedSymmetricKey(key);
            username = SymmetricUtils.decrypt(username, byteKey);
            password = SymmetricUtils.decrypt(password, byteKey);
            log.debug("[Herodotus] |- Decrypt Username is : [{}], Password is : [{}]", username, password);

        }

        return new UsernamePasswordAuthenticationToken(username, password);
    }

    /**
     * 重写该方法，避免在日志Debug级别会输出错误信息的问题。
     * @param request 请求
     * @param response 响应
     * @param failed 失败内容
     * @throws IOException IOException
     * @throws ServletException ServletException
     */
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        SecurityContextHolder.clearContext();
        getRememberMeServices().loginFail(request, response);
        getFailureHandler().onAuthenticationFailure(request, response, failed);
    }
}
