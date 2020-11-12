  

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdInterestType model module.
 * @module model/GetLoansLoanIdInterestType
 * @version 1.0
 */
class GetLoansLoanIdInterestType {
    /**
     * Constructs a new <code>GetLoansLoanIdInterestType</code>.
     * @alias module:model/GetLoansLoanIdInterestType
     */
    constructor() { 
        
        GetLoansLoanIdInterestType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdInterestType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdInterestType} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdInterestType} The populated <code>GetLoansLoanIdInterestType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdInterestType();

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
GetLoansLoanIdInterestType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansLoanIdInterestType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdInterestType.prototype['description'] = undefined;






export default GetLoansLoanIdInterestType;

