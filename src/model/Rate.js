

import ApiClient from '../ApiClient';
import AppUser from './AppUser';

/**
 * The Rate model module.
 * @module model/Rate
 * @version 1.0
 */
class Rate {
    /**
     * Constructs a new <code>Rate</code>.
     * @alias module:model/Rate
     */
    constructor() { 
        
        Rate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Rate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rate} obj Optional instance to populate.
     * @return {module:model/Rate} The populated <code>Rate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Rate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = AppUser.constructFromObject(data['createdBy']);
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('lastModifiedBy')) {
                obj['lastModifiedBy'] = AppUser.constructFromObject(data['lastModifiedBy']);
            }
            if (data.hasOwnProperty('lastModifiedDate')) {
                obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('productApply')) {
                obj['productApply'] = ApiClient.convertToType(data['productApply'], 'Number');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('approveUser')) {
                obj['approveUser'] = AppUser.constructFromObject(data['approveUser']);
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
Rate.prototype['id'] = undefined;

/**
 * @member {module:model/AppUser} createdBy
 */
Rate.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdDate
 */
Rate.prototype['createdDate'] = undefined;

/**
 * @member {module:model/AppUser} lastModifiedBy
 */
Rate.prototype['lastModifiedBy'] = undefined;

/**
 * @member {Date} lastModifiedDate
 */
Rate.prototype['lastModifiedDate'] = undefined;

/**
 * @member {String} name
 */
Rate.prototype['name'] = undefined;

/**
 * @member {Number} percentage
 */
Rate.prototype['percentage'] = undefined;

/**
 * @member {Number} productApply
 */
Rate.prototype['productApply'] = undefined;

/**
 * @member {Boolean} active
 */
Rate.prototype['active'] = undefined;

/**
 * @member {module:model/AppUser} approveUser
 */
Rate.prototype['approveUser'] = undefined;

/**
 * @member {Boolean} new
 */
Rate.prototype['new'] = undefined;






export default Rate;

