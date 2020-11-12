

import ApiClient from '../ApiClient';

/**
 * The GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum model module.
 * @module model/GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum
 * @version 1.0
 */
class GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum {
    /**
     * Constructs a new <code>GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum</code>.
     * @alias module:model/GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum
     */
    constructor() { 
        
        GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum} The populated <code>GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum();

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
GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum.prototype['description'] = undefined;






export default GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum;

