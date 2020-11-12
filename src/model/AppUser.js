

import ApiClient from '../ApiClient';
import AppUserClientMapping from './AppUserClientMapping';
import GrantedAuthority from './GrantedAuthority';
import Office from './Office';
import Role from './Role';
import Staff from './Staff';

/**
 * The AppUser model module.
 * @module model/AppUser
 * @version 1.0
 */
class AppUser {
    /**
     * Constructs a new <code>AppUser</code>.
     * @alias module:model/AppUser
     */
    constructor() { 
        
        AppUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppUser} obj Optional instance to populate.
     * @return {module:model/AppUser} The populated <code>AppUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppUser();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('accountNonExpired')) {
                obj['accountNonExpired'] = ApiClient.convertToType(data['accountNonExpired'], 'Boolean');
            }
            if (data.hasOwnProperty('accountNonLocked')) {
                obj['accountNonLocked'] = ApiClient.convertToType(data['accountNonLocked'], 'Boolean');
            }
            if (data.hasOwnProperty('credentialsNonExpired')) {
                obj['credentialsNonExpired'] = ApiClient.convertToType(data['credentialsNonExpired'], 'Boolean');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('office')) {
                obj['office'] = Office.constructFromObject(data['office']);
            }
            if (data.hasOwnProperty('staff')) {
                obj['staff'] = Staff.constructFromObject(data['staff']);
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [Role]);
            }
            if (data.hasOwnProperty('lastTimePasswordUpdated')) {
                obj['lastTimePasswordUpdated'] = ApiClient.convertToType(data['lastTimePasswordUpdated'], 'Date');
            }
            if (data.hasOwnProperty('passwordNeverExpires')) {
                obj['passwordNeverExpires'] = ApiClient.convertToType(data['passwordNeverExpires'], 'Boolean');
            }
            if (data.hasOwnProperty('appUserClientMappings')) {
                obj['appUserClientMappings'] = ApiClient.convertToType(data['appUserClientMappings'], [AppUserClientMapping]);
            }
            if (data.hasOwnProperty('selfServiceUser')) {
                obj['selfServiceUser'] = ApiClient.convertToType(data['selfServiceUser'], 'Boolean');
            }
            if (data.hasOwnProperty('systemUser')) {
                obj['systemUser'] = ApiClient.convertToType(data['systemUser'], 'Boolean');
            }
            if (data.hasOwnProperty('staffId')) {
                obj['staffId'] = ApiClient.convertToType(data['staffId'], 'Number');
            }
            if (data.hasOwnProperty('staffDisplayName')) {
                obj['staffDisplayName'] = ApiClient.convertToType(data['staffDisplayName'], 'String');
            }
            if (data.hasOwnProperty('notEnabled')) {
                obj['notEnabled'] = ApiClient.convertToType(data['notEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('authorities')) {
                obj['authorities'] = ApiClient.convertToType(data['authorities'], [GrantedAuthority]);
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
AppUser.prototype['id'] = undefined;

/**
 * @member {String} email
 */
AppUser.prototype['email'] = undefined;

/**
 * @member {String} username
 */
AppUser.prototype['username'] = undefined;

/**
 * @member {String} firstname
 */
AppUser.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
AppUser.prototype['lastname'] = undefined;

/**
 * @member {String} password
 */
AppUser.prototype['password'] = undefined;

/**
 * @member {Boolean} accountNonExpired
 */
AppUser.prototype['accountNonExpired'] = undefined;

/**
 * @member {Boolean} accountNonLocked
 */
AppUser.prototype['accountNonLocked'] = undefined;

/**
 * @member {Boolean} credentialsNonExpired
 */
AppUser.prototype['credentialsNonExpired'] = undefined;

/**
 * @member {Boolean} enabled
 */
AppUser.prototype['enabled'] = undefined;

/**
 * @member {Boolean} deleted
 */
AppUser.prototype['deleted'] = undefined;

/**
 * @member {module:model/Office} office
 */
AppUser.prototype['office'] = undefined;

/**
 * @member {module:model/Staff} staff
 */
AppUser.prototype['staff'] = undefined;

/**
 * @member {Array.<module:model/Role>} roles
 */
AppUser.prototype['roles'] = undefined;

/**
 * @member {Date} lastTimePasswordUpdated
 */
AppUser.prototype['lastTimePasswordUpdated'] = undefined;

/**
 * @member {Boolean} passwordNeverExpires
 */
AppUser.prototype['passwordNeverExpires'] = undefined;

/**
 * @member {Array.<module:model/AppUserClientMapping>} appUserClientMappings
 */
AppUser.prototype['appUserClientMappings'] = undefined;

/**
 * @member {Boolean} selfServiceUser
 */
AppUser.prototype['selfServiceUser'] = undefined;

/**
 * @member {Boolean} systemUser
 */
AppUser.prototype['systemUser'] = undefined;

/**
 * @member {Number} staffId
 */
AppUser.prototype['staffId'] = undefined;

/**
 * @member {String} staffDisplayName
 */
AppUser.prototype['staffDisplayName'] = undefined;

/**
 * @member {Boolean} notEnabled
 */
AppUser.prototype['notEnabled'] = undefined;

/**
 * @member {Array.<module:model/GrantedAuthority>} authorities
 */
AppUser.prototype['authorities'] = undefined;

/**
 * @member {Boolean} new
 */
AppUser.prototype['new'] = undefined;






export default AppUser;

