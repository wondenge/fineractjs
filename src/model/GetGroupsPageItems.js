

import ApiClient from '../ApiClient';
import GetGroupsStatus from './GetGroupsStatus';

/**
 * The GetGroupsPageItems model module.
 * @module model/GetGroupsPageItems
 * @version 1.0
 */
class GetGroupsPageItems {
    /**
     * Constructs a new <code>GetGroupsPageItems</code>.
     * @alias module:model/GetGroupsPageItems
     */
    constructor() { 
        
        GetGroupsPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsPageItems} obj Optional instance to populate.
     * @return {module:model/GetGroupsPageItems} The populated <code>GetGroupsPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsPageItems();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetGroupsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('hierarchy')) {
                obj['hierarchy'] = ApiClient.convertToType(data['hierarchy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsPageItems.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetGroupsPageItems.prototype['name'] = undefined;

/**
 * @member {module:model/GetGroupsStatus} status
 */
GetGroupsPageItems.prototype['status'] = undefined;

/**
 * @member {Boolean} active
 */
GetGroupsPageItems.prototype['active'] = undefined;

/**
 * @member {Number} officeId
 */
GetGroupsPageItems.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetGroupsPageItems.prototype['officeName'] = undefined;

/**
 * @member {String} hierarchy
 */
GetGroupsPageItems.prototype['hierarchy'] = undefined;






export default GetGroupsPageItems;

