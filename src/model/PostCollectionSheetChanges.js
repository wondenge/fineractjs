

import ApiClient from '../ApiClient';

/**
 * The PostCollectionSheetChanges model module.
 * @module model/PostCollectionSheetChanges
 * @version 1.0
 */
class PostCollectionSheetChanges {
    /**
     * Constructs a new <code>PostCollectionSheetChanges</code>.
     * @alias module:model/PostCollectionSheetChanges
     */
    constructor() { 
        
        PostCollectionSheetChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCollectionSheetChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCollectionSheetChanges} obj Optional instance to populate.
     * @return {module:model/PostCollectionSheetChanges} The populated <code>PostCollectionSheetChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCollectionSheetChanges();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('loanTransactions')) {
                obj['loanTransactions'] = ApiClient.convertToType(data['loanTransactions'], ['Number']);
            }
            if (data.hasOwnProperty('SavingsTransactions')) {
                obj['SavingsTransactions'] = ApiClient.convertToType(data['SavingsTransactions'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PostCollectionSheetChanges.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostCollectionSheetChanges.prototype['dateFormat'] = undefined;

/**
 * @member {Array.<Number>} loanTransactions
 */
PostCollectionSheetChanges.prototype['loanTransactions'] = undefined;

/**
 * @member {Array.<Number>} SavingsTransactions
 */
PostCollectionSheetChanges.prototype['SavingsTransactions'] = undefined;






export default PostCollectionSheetChanges;

