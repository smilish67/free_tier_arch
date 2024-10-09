package com.upz.ultra.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import jakarta.servlet.http.HttpServletRequest;

@Controller
public class controller {
    @RequestMapping(value ="/chat")
    public String chat(HttpServletRequest request) {
        return "chat";
    }
}
