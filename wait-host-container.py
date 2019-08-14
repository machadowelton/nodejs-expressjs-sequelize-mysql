import socket, sys, time

HOST = sys.argv[1]
PORT = sys.argv[2]

def check_host_port(host, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.connect((host, int(port)))
        sock.sendall(b'Test...')
        data = sock.recv(1024)
        data2 = repr(data).find('mysql_native_password')
        if data2 != -1:
            return True
        else:
            return False
    except Exception as e:
        return False


number = 1
while( not check_host_port(HOST, PORT)):
    print('Try connect to host-container. Host: ' + HOST + ', Port: ' + str(PORT) + '. Attempt: ' + str(number) )
    time.sleep(5)
    number += 1
    if number == 24:
        raise Exception('Attempts number connections exceeded to connect on host-container. Attempt: ' + str(number))
print('Connected on host-container: Host: ' + HOST + ', Port: ' + str(PORT) + ' with attempt: ' + str(number))