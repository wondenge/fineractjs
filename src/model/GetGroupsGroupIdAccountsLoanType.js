

import ApiClient from '../ApiClient';

/**
 * The GetGroupsGroupIdAccountsLoanType model module.
 * @module model/GetGroupsGroupIdAccountsLoanType
 * @version 1.0
 */
class GetGroupsGroupIdAccountsLoanType {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsLoanType</code>.
     * @alias module:model/GetGroupsGroupIdAccountsLoanType
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsLoanType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsLoanType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsLoanType} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsLoanType} The populated <code>GetGroupsGroupIdAccountsLoanType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsLoanType();

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
GetGroupsGroupIdAccountsLoanType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetGroupsGroupIdAccountsLoanType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetGroupsGroupIdAccountsLoanType.prototype['description'] = undefined;






export default GetGroupsGroupIdAccountsLoanType;

