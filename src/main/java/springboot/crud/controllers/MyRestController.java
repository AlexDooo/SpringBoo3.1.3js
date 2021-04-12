package springboot.crud.controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springboot.crud.model.Role;
import springboot.crud.model.User;
import springboot.crud.repos.RoleRepository;
import springboot.crud.repos.UserRepository;
import springboot.crud.service.RoleService;
import springboot.crud.service.UserService;


import java.util.List;


@RestController
@RequestMapping("api/")
public class MyRestController {

    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;


    @GetMapping("/allusers")
    public List<User> list() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getOne(@PathVariable("id") User user) {
        return user;
    }
//
    @PostMapping("/newUser")
    public User addUserBd(@RequestBody User user) {
        User user1 = user;
        return userService.save(user1);
    }
//
//
    @PutMapping("/edit/{id}")
    public User update(@RequestBody User user) {
        return userService.update(user);
    }
//
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") Integer id) {
        userService.delete(id);
    }
}
