

import ApiClient from '../ApiClient';

/**
 * The GetGroupsGroupIdAccountsSavingAccountType model module.
 * @module model/GetGroupsGroupIdAccountsSavingAccountType
 * @version 1.0
 */
class GetGroupsGroupIdAccountsSavingAccountType {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsSavingAccountType</code>.
     * @alias module:model/GetGroupsGroupIdAccountsSavingAccountType
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsSavingAccountType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsSavingAccountType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsSavingAccountType} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsSavingAccountType} The populated <code>GetGroupsGroupIdAccountsSavingAccountType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsSavingAccountType();

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
GetGroupsGroupIdAccountsSavingAccountType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetGroupsGroupIdAccountsSavingAccountType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetGroupsGroupIdAccountsSavingAccountType.prototype['description'] = undefined;






export default GetGroupsGroupIdAccountsSavingAccountType;

