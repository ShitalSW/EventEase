import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Base64;

public class GenerateSecretKey {
    public static void main(String[] args) {
        // Generate a random key suitable for HS512
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS512);
        String base64EncodedKey = Base64.getEncoder().encodeToString(key.getEncoded());
        System.out.println(base64EncodedKey);
    }
}

