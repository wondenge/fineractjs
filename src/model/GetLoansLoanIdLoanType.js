

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdLoanType model module.
 * @module model/GetLoansLoanIdLoanType
 * @version 1.0
 */
class GetLoansLoanIdLoanType {
    /**
     * Constructs a new <code>GetLoansLoanIdLoanType</code>.
     * @alias module:model/GetLoansLoanIdLoanType
     */
    constructor() { 
        
        GetLoansLoanIdLoanType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdLoanType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdLoanType} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdLoanType} The populated <code>GetLoansLoanIdLoanType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdLoanType();

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
GetLoansLoanIdLoanType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansLoanIdLoanType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdLoanType.prototype['description'] = undefined;






export default GetLoansLoanIdLoanType;

