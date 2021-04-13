package springboot.crud.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import springboot.crud.model.Role;
import springboot.crud.model.User;
import springboot.crud.repos.RoleRepository;
import springboot.crud.repos.UserRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User save(User user) {
       return userRepository.save(user);
    }

    @Override
    public User show(int id) {
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.get();
    }

    @Override
    public Role showRole(int id) {
        Optional<Role> optionalUser = roleRepository.findById(id);

        return optionalUser.get();
    }

    @Override
    public User update(User user) {
        User updateUser = userRepository.findById(user.getId()).orElse(null);
        updateUser.setFirstName(user.getFirstName());
        updateUser.setLastName(user.getLastName());
        updateUser.setEmail(user.getEmail());
        updateUser.setUserName(user.getUserName());
        updateUser.setPassword(user.getPassword());
        updateUser.setRoles(user.getRoles());
        return userRepository.save(updateUser);
    }

    @Override

    public void delete(Integer id) {
        userRepository.deleteById(id);
    }

    @Override
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
}
