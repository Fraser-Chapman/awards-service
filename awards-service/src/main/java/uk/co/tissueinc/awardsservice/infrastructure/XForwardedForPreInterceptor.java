package uk.co.tissueinc.awardsservice.infrastructure;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import uk.co.tissueinc.awardsservice.service.RequestDetailsService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class XForwardedForPreInterceptor extends HandlerInterceptorAdapter {

    private final RequestDetailsService requestDetailsService;

    @Autowired
    public XForwardedForPreInterceptor(RequestDetailsService requestDetailsService) {
        this.requestDetailsService = requestDetailsService;
    }

    @Override
    //TODO hash IP address
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        final String clientIp = request.getHeader("X-Forwarded-For");
        requestDetailsService.setxForwardedFor(clientIp);
        System.out.printf("------------------------ Client-ip: %s ------------------------", clientIp);

        return true;
    }
}
