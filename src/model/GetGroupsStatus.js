

import ApiClient from '../ApiClient';

/**
 * The GetGroupsStatus model module.
 * @module model/GetGroupsStatus
 * @version 1.0
 */
class GetGroupsStatus {
    /**
     * Constructs a new <code>GetGroupsStatus</code>.
     * @alias module:model/GetGroupsStatus
     */
    constructor() { 
        
        GetGroupsStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsStatus} obj Optional instance to populate.
     * @return {module:model/GetGroupsStatus} The populated <code>GetGroupsStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetGroupsStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetGroupsStatus.prototype['description'] = undefined;






export default GetGroupsStatus;

