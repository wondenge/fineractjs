

import ApiClient from '../ApiClient';

/**
 * The GetGroupsGroupIdAccountsMemberLoanType model module.
 * @module model/GetGroupsGroupIdAccountsMemberLoanType
 * @version 1.0
 */
class GetGroupsGroupIdAccountsMemberLoanType {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsMemberLoanType</code>.
     * @alias module:model/GetGroupsGroupIdAccountsMemberLoanType
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsMemberLoanType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsMemberLoanType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsMemberLoanType} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsMemberLoanType} The populated <code>GetGroupsGroupIdAccountsMemberLoanType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsMemberLoanType();

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
GetGroupsGroupIdAccountsMemberLoanType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetGroupsGroupIdAccountsMemberLoanType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetGroupsGroupIdAccountsMemberLoanType.prototype['description'] = undefined;






export default GetGroupsGroupIdAccountsMemberLoanType;

